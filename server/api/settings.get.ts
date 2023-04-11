import settings from '@/server/config/settings.json'
export default defineEventHandler(()=>{
    return settings
})