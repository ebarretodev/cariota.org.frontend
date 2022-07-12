import axios from 'axios'

export const getIotaUsd = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=iota&vs_currencies=usd',
  {
    // query URL without using browser cache
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  })
    return response.data.iota.usd
}
