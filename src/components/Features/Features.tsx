import "./Features.css";

export default function Features() {
  const features = [
    {
      icon: <i className="ri-eye-fill"></i>,
      title: "Acompanhe suas músicas",
      description: "Registre todas as músicas que já ouviu ou comece agora.",
    },
    {
      icon: <i className="ri-heart-fill"></i>,
      title: "Demonstre seu amor",
      description:
        "Curta suas músicas favoritas e explore as listas de outros usuários.",
    },
    {
      icon: <i className="ri-pencil-fill"></i>,
      title: "Escreva e compartilhe",
      description:
        "Publique resenhas e acompanhe amigos para ver as opiniões deles.",
    },
    {
      icon: <i className="ri-star-fill"></i>,
      title: "Avalie músicas e álbuns",
      description:
        "Dê notas em estrelas (incluindo frações) e compartilhe suas impressões.",
    },
    {
      icon: <i className="ri-calendar-2-fill"></i>,
      title: "Registre sua jornada",
      description:
        "Acompanhe suas músicas e álbuns escutados e visualize estatísticas detalhadas.",
    },
    {
      icon: <i className="ri-play-list-line"></i>,
      title: "Crie suas listas",
      description:
        "Organize músicas e álbuns em coleções temáticas e monte sua playlist personalizada.",
    },
  ];

  return (
    <>
      <section className="features">
        <section className="features__conteudo">
          <h2 className="features__conteudo__titulo">O VALVED DEIXA VOCÊ...</h2>
          <section className="features__conteudo__wrapper">
            <section className="features__conteudo__grid">
              {features.map((feature, index) => (
                <div key={index} className="features__card">
                  <div className="features__icon">{feature.icon}</div>
                  <h3 className="features__card-title">{feature.title}</h3>
                  <p className="features__card-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
