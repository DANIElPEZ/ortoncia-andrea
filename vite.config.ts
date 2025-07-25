import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({mode})=>{
  const env = loadEnv(mode,process.cwd(),'')
  return {
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:[
      `${env.host}-ip-200-118-62-119.tunnelmole.net`
    ],
    host:true,
    open: true
  }
}})