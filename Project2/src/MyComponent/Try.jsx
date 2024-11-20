import React from 'react'

function Try() {
    const arr=[1,2,3,4,5,6,7]
    const arr1=[
        {
            id:1,
            name:'John',
            age:25,
            img1:'https://www.bing.com/images/search?view=detailV2&ccid=4siKIW3o&id=13AACF36666E0F1D8D744235BEC80C64E9E80A5E&thid=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&mediaurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1666021%2Fpexels-photo-1666021.jpeg%3Fcs%3Dsrgb%26dl%3Dconifers-daylight-environment-1666021.jpg%26fm%3Djpg&exph=6000&expw=4000&q=images&simid=608008202845685319&ck=DD43FD382AAB5ABCEE187A3A9567177B&selectedIndex=1&itb=0&cw=1145&ch=535&mode=overlay&shtc=0&shth=OIP.WvjS8H8Bennpwp2aZdKemQHaLH&shsc=idp&form=EX0050&shid=f0dbf0e6-e82e-428a-a2f6-37cb9ddb1bd1&shtp=GetUrl&shtk=U2hpbmluZyBDbG91ZHMsIE1vdW50YWluIFZpZXdzLCBMYWtlLCBPdXRkb29ycywgUmVmbGVjdCBXYWxscGFwZXIgLi4u&shdk=Rm91bmQgb24gQmluZyBmcm9tIHd3dy5waW50ZXJlc3QuY28ua3I%3D&shhk=%2BbQKGFQh%2FYPNePbYJ%2Bds90uPAvh5MIuOCk2v504K1Do%3D',
        }
    ]
  return (
    <div className='container'>
      {
        arr.map((e) => (
          <p>{e}</p>
        ))
      }
      {
        arr1.map((e) => (
            <>
            <h3>{e.id}</h3>
            <h1>{e.name}</h1>
            <p>{e.age}</p>
            <img src={e.img1} alt="image" /> 
            </>
        ))
      }
    </div>
  )
}

export default Try
