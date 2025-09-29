import { useState } from "react";
import styles from "./components/App.module.css";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { CardTitle } from "./components/Card/CardTitle";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

export function App() {
  const themes = [
    {
      id: 1,
      name: "front-end",
    },
    {
      id: 2,
      name: "back-end",
    },
    {
      id: 3,
      name: "devops",
    },
    {
      id: 4,
      name: "inteligência artificial",
    },
    {
      id: 5,
      name: "data science",
    },
    {
      id: 6,
      name: "cloud",
    },
  ];

  const [events, setEvents] = useState([
    {
      theme: themes[0],
      cover: "/images/tecboard-cards-background-1.png",
      description:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
      date: new Date(),
      title: "Mulheres no Front",
    },
    {
      theme: themes[0],
      cover: "/images/tecboard-cards-background-2.png",
      description:
        "Meetup unindo design e desenvolvimento front-end para explorar tendências em UI.",
      date: new Date(2025, 4, 20),
      title: "Pixel & Code",
    },
    {
      theme: themes[1],
      cover: "/images/tecboard-cards-background-3.png",
      description:
        "Performance e inovação no back-end, conectando especialistas e entusiastas.",
      date: new Date(2025, 4, 20),
      title: "Back-End Masters",
    },
    {
      theme: themes[1],
      cover: "/images/tecboard-cards-background-4.png",
      description:
        "Workshop que explora a essência do back-end, escalabilidade e boas práticas.",
      date: new Date(2025, 4, 20),
      title: "Code to Core",
    },
    {
      theme: themes[1],
      cover: "/images/tecboard-cards-background-5.png",
      description:
        "Evento dedicado a tecnologias e estratégias para desenvolvimento back-end.",
      date: new Date(2025, 4, 20),
      title: "Server Side Summit",
    },
    {
      theme: themes[2],
      cover: "/images/tecboard-cards-background-6.png",
      description:
        "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações.",
      date: new Date(2025, 4, 20),
      title: "DevOps Evolution",
    },
    {
      theme: themes[3],
      cover: "/images/tecboard-cards-background-7.png",
      description: "Imersão sobre IA, redes neurais e aprendizado profundo.",
      date: new Date(2025, 4, 20),
      title: "Deep Learning Days",
    },
    {
      theme: themes[3],
      cover: "/images/tecboard-cards-background-8.png",
      description:
        "Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis.",
      date: new Date(2025, 4, 20),
      title: "IA na palma da mão",
    },
    {
      theme: themes[4],
      cover: "/images/tecboard-cards-background-9.png",
      description:
        "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados.",
      date: new Date(2025, 4, 20),
      title: "Data Pulse",
    },
    {
      theme: themes[4],
      cover: "/images/tecboard-cards-background-10.png",
      description:
        "Palestra sobre últimas tendências em big data, análise e inteligência empresarial.",
      date: new Date(2025, 4, 20),
      title: "Data Revolution",
    },
    {
      theme: themes[4],
      cover: "/images/tecboard-cards-background-11.png",
      description:
        "Minicurso sobre como dados impulsionam decisões e inovações para o futuro.",
      date: new Date(2025, 4, 20),
      title: "Driven by Data",
    },
    {
      theme: themes[4],
      cover: "/images/tecboard-cards-background-12.png",
      description:
        "Ciclo de palestras com especialistas do universo dos bancos de dados SQL.",
      date: new Date(2025, 4, 20),
      title: "SQL Summit",
    },
    {
      theme: themes[5],
      cover: "/images/tecboard-cards-background-13.png",
      description:
        "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura.",
      date: new Date(2025, 4, 20),
      title: "SkyTech Summit",
    },
    {
      theme: themes[5],
      cover: "/images/tecboard-cards-background-14.png",
      description:
        "Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud.",
      date: new Date(2025, 4, 20),
      title: "Mundo Cloud",
    },
  ]);

  function addEvent(event) {
    setEvents([...events, event]);
  }

  return (
    <>
      <Header />
      <Banner />
      <main className={styles.main}>
        <Form themes={themes} onSubmit={addEvent} />

        <section className={styles.cardContainer}>
          {themes.map((theme) => {
            if (
              !events.some((event) => {
                return event?.theme?.id === theme.id;
              })
            ) {
              return null;
            }

            return (
              <section key={theme.id} className={styles.card}>
                <CardTitle theme={theme} />
                <div className={styles.cardEvents}>
                  {events
                    .filter((event) => {
                      return event?.theme?.id === theme.id;
                    })
                    .map((event) => {
                      return (
                        <Card
                          event={event}
                          key={`${theme.id}-${event.title}`}
                        />
                      );
                    })}
                </div>
              </section>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
