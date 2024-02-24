// src/CurrencyConverter.js
import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === '') {
      setAmount(value);
    }
  };

  const handleFromCurrencyChange = (event) => {
    const value = event.target.value;
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (event) => {
    const value = event.target.value;
    setToCurrency(value);
  };

  return (
    <div className="converter-container">
      <div className="input-container">
        <h1> Currency Convertor </h1>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className="amount-input"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="AED">UAE Dirham</option>
          <option value="AFN">Afghan Afghani</option>
          <option value="ALL">Albanian Lek</option>
          <option value="AMD">Armenian Dram</option>
          <option value="ANG">Netherlands Antillian Guilder</option>
          <option value="AOA">Angolan Kwanza</option>
          <option value="ARS">Argentine Peso</option>
          <option value="AUD">Australian Dollar</option>
          <option value="AWG">Aruban Florin</option>
          <option value="AZN">Azerbaijani Manat</option>
          <option value="BAM">Bosnia and Herzegovina Mark</option>
          <option value="BBD">Barbados Dollar</option>
          <option value="BDT">Bangladeshi Taka</option>
          <option value="BGN">Bulgarian Lev</option>
          <option value="BHD">Bahraini Dinar</option>
          <option value="BIF">Burundian Franc</option>
          <option value="BMD">Bermudian Dollar</option>
          <option value="BND">Brunei Dollar</option>
          <option value="BOB">Bolivian Boliviano</option>
          <option value="BRL">Brazilian Real</option>
          <option value="BSD">Bahamian Dollar</option>
          <option value="BTN">Bhutanese Ngultrum</option>
          <option value="BWP">Botswana Pula</option>
          <option value="BYN">Belarusian Ruble</option>
          <option value="BZD">Belize Dollar</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CDF">Congolese Franc</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CLP">Chilean Peso</option>
          <option value="CNY">Chinese Renminbi</option>
          <option value="COP">Colombian Peso</option>
          <option value="CRC">Costa Rican Colon</option>
          <option value="CUP">Cuban Peso</option>
          <option value="CVE">Cape Verdean Escudo</option>
          <option value="CZK">Czech Koruna</option>
          <option value="DJF">Djiboutian Franc</option>
          <option value="DKK">Danish Krone</option>
          <option value="DOP">Dominican Peso</option>
          <option value="DZD">Algerian Dinar</option>
          <option value="EGP">Egyptian Pound</option>
          <option value="ERN">Eritrean Nakfa</option>
          <option value="ETB">Ethiopian Birr</option>
          <option value="EUR">Euro</option>
          <option value="FJD">Fiji Dollar</option>
          <option value="FKP">Falkland Islands Pound</option>
          <option value="FOK">Faroese Króna</option>
          <option value="GBP">Pound Sterling</option>
          <option value="GEL">Georgian Lari</option>
          <option value="GGP">Guernsey Pound</option>
          <option value="GHS">Ghanaian Cedi</option>
          <option value="GIP">Gibraltar Pound</option>
          <option value="GMD">Gambian Dalasi</option>
          <option value="GNF">Guinean Franc</option>
          <option value="GTQ">Guatemalan Quetzal</option>
          <option value="GYD">Guyanese Dollar</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="HNL">Honduran Lempira</option>
          <option value="HRK">Croatian Kuna</option>
          <option value="HTG">Haitian Gourde</option>
          <option value="HUF">Hungarian Forint</option>
          <option value="IDR">Indonesian Rupiah</option>
          <option value="ILS">Israeli New Shekel</option>
          <option value="IMP">Manx Pound</option>
          <option value="INR">Indian Rupee</option>
          <option value="IQD">Iraqi Dinar</option>
          <option value="IRR">Iranian Rial</option>
          <option value="ISK">Icelandic Króna</option>
          <option value="JEP">Jersey Pound</option>
          <option value="JMD">Jamaican Dollar</option>
          <option value="JOD">Jordanian Dinar</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KES">Kenyan Shilling</option>
          <option value="KGS">Kyrgyzstani Som</option>
          <option value="KHR">Cambodian Riel</option>
          <option value="KID">Kiribati Dollar</option>
          <option value="KMF">Comorian Franc</option>
          <option value="KRW">South Korean Won</option>
          <option value="KWD">Kuwaiti Dinar</option>
          <option value="KYD">Cayman Islands Dollar</option>
          <option value="KZT">Kazakhstani Tenge</option>
          <option value="LAK">Lao Kip</option>
          <option value="LBP">Lebanese Pound</option>
          <option value="LKR">Sri Lanka Rupee</option>
          <option value="LRD">Liberian Dollar</option>
          <option value="LSL">Lesotho Loti</option>
          <option value="LYD">Libyan Dinar</option>
          <option value="MAD">Moroccan Dirham</option>
          <option value="MDL">Moldovan Leu</option>
          <option value="MGA">Malagasy Ariary</option>
          <option value="MKD">Macedonian Denar</option>
          <option value="MMK">Burmese Kyat</option>
          <option value="MNT">Mongolian Tögrög</option>
          <option value="MOP">Macanese Pataca</option>
          <option value="MRU">Mauritanian Ouguiya</option>
          <option value="MUR">Mauritian Rupee</option>
          <option value="MVR">Maldivian Rufiyaa</option>
          <option value="MWK">Malawian Kwacha</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="MZN">Mozambican Metical</option>
          <option value="NAD">Namibian Dollar</option>
          <option value="NGN">Nigerian Naira</option>
          <option value="NIO">Nicaraguan Córdoba</option>
          <option value="NOK">Norwegian Krone</option>
          <option value="NPR">Nepalese Rupee</option>
          <option value="NZD">New Zealand Dollar</option>
          <option value="OMR">Omani Rial</option>
          <option value="PAB">Panamanian Balboa</option>
          <option value="PEN">Peruvian Sol</option>
          <option value="PGK">Papua New Guinean Kina</option>
          <option value="PHP">Philippine Peso</option>
          <option value="PKR">Pakistani Rupee</option>
          <option value="PLN">Polish Złoty</option>
          <option value="PYG">Paraguayan Guaraní</option>
          <option value="QAR">Qatari Riyal</option>
          <option value="RON">Romanian Leu</option>
          <option value="RSD">Serbian Dinar</option>
          <option value="RUB">Russian Ruble</option>
          <option value="RWF">Rwandan Franc</option>
          <option value="SAR">Saudi Riyal</option>
          <option value="SBD">Solomon Islands Dollar</option>
          <option value="SCR">Seychellois Rupee</option>
          <option value="SDG">Sudanese Pound</option>
          <option value="SEK">Swedish Krona</option>
          <option value="SGD">Singapore Dollar</option>
          <option value="SHP">Saint Helena Pound</option>
          <option value="SLE">Sierra Leonean Leone</option>
          <option value="SOS">Somali Shilling</option>
          <option value="SRD">Surinamese Dollar</option>
          <option value="SSP">South Sudanese Pound</option>
          <option value="STN">São Tomé and Príncipe Dobra</option>
          <option value="SYP">Syrian Pound</option>
          <option value="SZL">Eswatini Lilangeni</option>
          <option value="THB">Thai Baht</option>
          <option value="TJS">Tajikistani Somoni</option>
          <option value="TMT">Turkmenistan Manat</option>
          <option value="TND">Tunisian Dinar</option>
          <option value="TOP">Tongan Paʻanga</option>
          <option value="TRY">Turkish Lira</option>
          <option value="TTD">Trinidad and Tobago Dollar</option>
          <option value="TVD">Tuvaluan Dollar</option>
          <option value="TWD">New Taiwan Dollar</option>
          <option value="TZS">Tanzanian Shilling</option>
          <option value="UAH">Ukrainian Hryvnia</option>
          <option value="UGX">Ugandan Shilling</option>
          <option value="USD">United States Dollar</option>
          <option value="UYU">Uruguayan Peso</option>
          <option value="UZS">Uzbekistani So'm</option>
          <option value="VES">Venezuelan Bolívar Soberano</option>
          <option value="VND">Vietnamese Đồng</option>
          <option value="VUV">Vanuatu Vatu</option>
          <option value="WST">Samoan Tālā</option>
          <option value="XAF">Central African CFA Franc</option>
          <option value="XCD">East Caribbean Dollar</option>
          <option value="XDR">Special Drawing Rights</option>
          <option value="XOF">West African CFA franc</option>
          <option value="XPF">CFP Franc</option>
          <option value="YER">Yemeni Rial</option>
          <option value="ZAR">South African Rand</option>
          <option value="ZMW">Zambian Kwacha</option>
          <option value="ZWL">Zimbabwean Dollar</option>
        </select>
      </div>
      <p className="Input-currency">{amount} <i>{fromCurrency}</i></p>
      <div className="equals-sign"><h3><i>Equals to</i></h3></div>
      <div className="output-container">
        <p className="converted-amount">{convertedAmount} <i>{toCurrency}</i></p>
         <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="AED">UAE Dirham</option>
          <option value="AFN">Afghan Afghani</option>
          <option value="ALL">Albanian Lek</option>
          <option value="AMD">Armenian Dram</option>
          <option value="ANG">Netherlands Antillian Guilder</option>
          <option value="AOA">Angolan Kwanza</option>
          <option value="ARS">Argentine Peso</option>
          <option value="AUD">Australian Dollar</option>
          <option value="AWG">Aruban Florin</option>
          <option value="AZN">Azerbaijani Manat</option>
          <option value="BAM">Bosnia and Herzegovina Mark</option>
          <option value="BBD">Barbados Dollar</option>
          <option value="BDT">Bangladeshi Taka</option>
          <option value="BGN">Bulgarian Lev</option>
          <option value="BHD">Bahraini Dinar</option>
          <option value="BIF">Burundian Franc</option>
          <option value="BMD">Bermudian Dollar</option>
          <option value="BND">Brunei Dollar</option>
          <option value="BOB">Bolivian Boliviano</option>
          <option value="BRL">Brazilian Real</option>
          <option value="BSD">Bahamian Dollar</option>
          <option value="BTN">Bhutanese Ngultrum</option>
          <option value="BWP">Botswana Pula</option>
          <option value="BYN">Belarusian Ruble</option>
          <option value="BZD">Belize Dollar</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CDF">Congolese Franc</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CLP">Chilean Peso</option>
          <option value="CNY">Chinese Renminbi</option>
          <option value="COP">Colombian Peso</option>
          <option value="CRC">Costa Rican Colon</option>
          <option value="CUP">Cuban Peso</option>
          <option value="CVE">Cape Verdean Escudo</option>
          <option value="CZK">Czech Koruna</option>
          <option value="DJF">Djiboutian Franc</option>
          <option value="DKK">Danish Krone</option>
          <option value="DOP">Dominican Peso</option>
          <option value="DZD">Algerian Dinar</option>
          <option value="EGP">Egyptian Pound</option>
          <option value="ERN">Eritrean Nakfa</option>
          <option value="ETB">Ethiopian Birr</option>
          <option value="EUR">Euro</option>
          <option value="FJD">Fiji Dollar</option>
          <option value="FKP">Falkland Islands Pound</option>
          <option value="FOK">Faroese Króna</option>
          <option value="GBP">Pound Sterling</option>
          <option value="GEL">Georgian Lari</option>
          <option value="GGP">Guernsey Pound</option>
          <option value="GHS">Ghanaian Cedi</option>
          <option value="GIP">Gibraltar Pound</option>
          <option value="GMD">Gambian Dalasi</option>
          <option value="GNF">Guinean Franc</option>
          <option value="GTQ">Guatemalan Quetzal</option>
          <option value="GYD">Guyanese Dollar</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="HNL">Honduran Lempira</option>
          <option value="HRK">Croatian Kuna</option>
          <option value="HTG">Haitian Gourde</option>
          <option value="HUF">Hungarian Forint</option>
          <option value="IDR">Indonesian Rupiah</option>
          <option value="ILS">Israeli New Shekel</option>
          <option value="IMP">Manx Pound</option>
          <option value="INR">Indian Rupee</option>
          <option value="IQD">Iraqi Dinar</option>
          <option value="IRR">Iranian Rial</option>
          <option value="ISK">Icelandic Króna</option>
          <option value="JEP">Jersey Pound</option>
          <option value="JMD">Jamaican Dollar</option>
          <option value="JOD">Jordanian Dinar</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KES">Kenyan Shilling</option>
          <option value="KGS">Kyrgyzstani Som</option>
          <option value="KHR">Cambodian Riel</option>
          <option value="KID">Kiribati Dollar</option>
          <option value="KMF">Comorian Franc</option>
          <option value="KRW">South Korean Won</option>
          <option value="KWD">Kuwaiti Dinar</option>
          <option value="KYD">Cayman Islands Dollar</option>
          <option value="KZT">Kazakhstani Tenge</option>
          <option value="LAK">Lao Kip</option>
          <option value="LBP">Lebanese Pound</option>
          <option value="LKR">Sri Lanka Rupee</option>
          <option value="LRD">Liberian Dollar</option>
          <option value="LSL">Lesotho Loti</option>
          <option value="LYD">Libyan Dinar</option>
          <option value="MAD">Moroccan Dirham</option>
          <option value="MDL">Moldovan Leu</option>
          <option value="MGA">Malagasy Ariary</option>
          <option value="MKD">Macedonian Denar</option>
          <option value="MMK">Burmese Kyat</option>
          <option value="MNT">Mongolian Tögrög</option>
          <option value="MOP">Macanese Pataca</option>
          <option value="MRU">Mauritanian Ouguiya</option>
          <option value="MUR">Mauritian Rupee</option>
          <option value="MVR">Maldivian Rufiyaa</option>
          <option value="MWK">Malawian Kwacha</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="MZN">Mozambican Metical</option>
          <option value="NAD">Namibian Dollar</option>
          <option value="NGN">Nigerian Naira</option>
          <option value="NIO">Nicaraguan Córdoba</option>
          <option value="NOK">Norwegian Krone</option>
          <option value="NPR">Nepalese Rupee</option>
          <option value="NZD">New Zealand Dollar</option>
          <option value="OMR">Omani Rial</option>
          <option value="PAB">Panamanian Balboa</option>
          <option value="PEN">Peruvian Sol</option>
          <option value="PGK">Papua New Guinean Kina</option>
          <option value="PHP">Philippine Peso</option>
          <option value="PKR">Pakistani Rupee</option>
          <option value="PLN">Polish Złoty</option>
          <option value="PYG">Paraguayan Guaraní</option>
          <option value="QAR">Qatari Riyal</option>
          <option value="RON">Romanian Leu</option>
          <option value="RSD">Serbian Dinar</option>
          <option value="RUB">Russian Ruble</option>
          <option value="RWF">Rwandan Franc</option>
          <option value="SAR">Saudi Riyal</option>
          <option value="SBD">Solomon Islands Dollar</option>
          <option value="SCR">Seychellois Rupee</option>
          <option value="SDG">Sudanese Pound</option>
          <option value="SEK">Swedish Krona</option>
          <option value="SGD">Singapore Dollar</option>
          <option value="SHP">Saint Helena Pound</option>
          <option value="SLE">Sierra Leonean Leone</option>
          <option value="SOS">Somali Shilling</option>
          <option value="SRD">Surinamese Dollar</option>
          <option value="SSP">South Sudanese Pound</option>
          <option value="STN">São Tomé and Príncipe Dobra</option>
          <option value="SYP">Syrian Pound</option>
          <option value="SZL">Eswatini Lilangeni</option>
          <option value="THB">Thai Baht</option>
          <option value="TJS">Tajikistani Somoni</option>
          <option value="TMT">Turkmenistan Manat</option>
          <option value="TND">Tunisian Dinar</option>
          <option value="TOP">Tongan Paʻanga</option>
          <option value="TRY">Turkish Lira</option>
          <option value="TTD">Trinidad and Tobago Dollar</option>
          <option value="TVD">Tuvaluan Dollar</option>
          <option value="TWD">New Taiwan Dollar</option>
          <option value="TZS">Tanzanian Shilling</option>
          <option value="UAH">Ukrainian Hryvnia</option>
          <option value="UGX">Ugandan Shilling</option>
          <option value="USD">United States Dollar</option>
          <option value="UYU">Uruguayan Peso</option>
          <option value="UZS">Uzbekistani So'm</option>
          <option value="VES">Venezuelan Bolívar Soberano</option>
          <option value="VND">Vietnamese Đồng</option>
          <option value="VUV">Vanuatu Vatu</option>
          <option value="WST">Samoan Tālā</option>
          <option value="XAF">Central African CFA Franc</option>
          <option value="XCD">East Caribbean Dollar</option>
          <option value="XDR">Special Drawing Rights</option>
          <option value="XOF">West African CFA franc</option>
          <option value="XPF">CFP Franc</option>
          <option value="YER">Yemeni Rial</option>
          <option value="ZAR">South African Rand</option>
          <option value="ZMW">Zambian Kwacha</option>
          <option value="ZWL">Zimbabwean Dollar</option>
        </select>
      </div>
    </div>
  );
};


export default CurrencyConverter;
