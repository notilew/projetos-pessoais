import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import './style.css';

interface Item {
    id: number,
    title: string;
    imageURL: string;
}

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const Point = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUFs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedUF, setSelectedUF] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [initialPositionMap, setInitialPositionMap] = useState<[number, number]>([0, 0]);
    const [selectedPositionMap, setSelectedPositionMap] = useState<[number, number]>([0, 0]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        number: 0
    });
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const history = useHistory();

    useEffect(() => {
        api.get('/items').then(response => {
            setItems(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                const ufs = response.data.map(uf => uf.sigla);

                setUFs(ufs);
            });
    }, []);

    useEffect(() => {
        if (selectedUF === '0') return;

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
            .then(response => {
                const cities = response.data.map(city => city.nome);

                setCities(cities);
            });
    }, [selectedUF]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInitialPositionMap([latitude, longitude]);
        });
    });

    function handleSelectUF(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value

        setSelectedUF(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value

        setSelectedCity(city);
    }

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPositionMap([event.latlng.lat, event.latlng.lng]);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([ ...selectedItems, id ]);
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, email, whatsapp, number } = formData;
        const uf = selectedUF;
        const city = selectedCity;
        const [ latitude, longitude ] = selectedPositionMap;
        const items = selectedItems;

        const data = {
            name,
            email,
            whatsapp,
            number,
            uf,
            city,
            latitude,
            longitude,
            items
        };

        await api.post('/points', data);

        alert('Ponto de Coleta Criado!');

        history.push('/');
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft></FiArrowLeft>
                    Voltar para Home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro do Ponto de Coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome do Ponto</label>
                        <input type="text" name="name" id="name" onChange={handleInputChange} />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" onChange={handleInputChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" onChange={handleInputChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no Mapa</span>
                    </legend>

                    <Map center={initialPositionMap} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPositionMap}></Marker>
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="number">Número</label>
                            <input type="number" name="number" id="number" onChange={handleInputChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
                            <select name="uf" id="uf" value={selectedUF} onChange={handleSelectUF}>
                                <option value="0">Selecione um Estado</option>
                                {ufs.map(uf => {
                                    return (
                                        <option key={uf} value={uf}>{uf}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="city">Cidade</label>
                        <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                            <option value="0">Selecione uma Cidade</option>
                            {cities.map(city => {
                                return (
                                    <option key={city} value={city}>{city}</option>
                                );
                            })}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Itens de Coleta</h2>
                        <span>Selecione um ou mais Itens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => {
                            return (
                                <li key={item.id} className={selectedItems.includes(item.id) ? 'selected' : ''} onClick={() => handleSelectItem(item.id)}>
                                    <img src={item.imageURL} alt={item.title} />
                                    <span>{item.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar Ponto de Coleta
                </button>
            </form>
        </div>
    );
};

export default Point;