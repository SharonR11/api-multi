import {NextResponse, NextRequest} from  'next/server';
import { songs } from '@/mock/musicas'

export function GET(req: NextRequest){
    return NextResponse.json(songs);
}