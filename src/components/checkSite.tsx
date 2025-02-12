import Image from 'next/image'

export const CheckSite = () => {
  return (
    <div className="md:grid md:grid-cols-2 bg-primary">
      <div>
        <Image src="/imagens/escola.png" alt="Escola" height={800} width={800} />
      </div>
      <div>
        <p>Hesitar em entrar?</p>
        <h1>Somos a melhor escolha Para o seu filho</h1>
        <p>
          Como uma palavra do nosso coração, adoramos dedicar às crianças as coisas valiosas da
          vida. Uma ótima educação é essencial para um desenvolvimento sólido tanto na alma quanto
          na mente das crianças. Vamos com as crianças para brincar, aprender e crescer melhor.
        </p>
      </div>
    </div>
  )
}
