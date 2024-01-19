type TableProps = {
  name: string;
}

type AssetProps = {
  id: string;
}

const getTableByName = ({ name }: TableProps): URL => {
  const tmpURL = [
    import.meta.env.VITE_API_URL,
    name
  ].join('/').split('//').join('/')

  const url = new URL(tmpURL)

  return url
}

const getAssetsById = ({ id }: AssetProps): URL => {
  const tmpUrl = [
    import.meta.env.VITE_API_ASSETS_URL,
    id
  ].join('/').split('//').join('/')

  const url = new URL(tmpUrl)
  
  return url
}

const apiService = () => {
  return {
    getTableByName,
    getAssetsById
  }
}

export default apiService
