

export function CollectAndAuthFrom(e: React.FormEvent<HTMLFormElement>)
{
    e.preventDefault();

    const data= Object.fromEntries(
        new FormData(e.currentTarget)
    )
    
    const IsEmpty=Object.values(data).every(
        (value)=>{ 
            return(
                value.toString().trim() !== ""
            )
        }
    )
    
    if(!IsEmpty)
    {
        throw new Error('Please fill required field')
    }

    return data
}