export type SubmenuItem= {
    name: string;
    path: string
  }
export type navArrType={
    id:number
    title:string
    url:string
    submenu?: SubmenuItem[];
}
export type breadcrumbArrType={
    id:number
    img:{
        src:string

    }
    title:string
    content:string
}
export type newsEventsType={
    id:number
    title:string
    icon:string
}
export type experienceArrType={
    id:number 
    title : any
}