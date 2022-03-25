import axios from 'axios'

export const getIotaUsd = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=iota&vs_currencies=usd')
    return response.data.iota.usd
}
