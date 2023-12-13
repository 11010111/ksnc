type TableProps = {
  name: string;
}

type AssetProps = {
  id: string;
  size?: string;
}

const getTableByName = ({ name }: TableProps): URL => {
  const tmpURL = [
    import.meta.env.VITE_API_URL,
    name
  ].join('/').split('//').join('/')

  const url = new URL(tmpURL)

  return url
}

const getAssetsById = ({ id, size }: AssetProps): URL => {
  const tmpUrl = [
    import.meta.env.VITE_API_ASSETS_URL,
    id
  ].join('/').split('//').join('/')

  const url = new URL(tmpUrl)
  
  if (size) {
    url.searchParams.append('key', size)
  }

  return url
}

const apiService = () => {
  return {
    getTableByName,
    getAssetsById
  }
}

export default apiService
