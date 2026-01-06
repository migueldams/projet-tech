import Counter from "@/components/common/Counter";
import { useEffect, useRef } from "react";
import { galleries, partern, service } from "@/constant";
import { ArrowRight, Check } from "lucide-react";
import Title from "@/components/ui/Title";
import Stick from "@/components/ui/stick";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { Link } from "react-router-dom";
import { handleScroll } from "@/helper/navigate";

function Services() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]); // ref type-safe

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;

      cardsRef.current.forEach((card) => {
        if (!card) return; // TS safety

        const rect = card.getBoundingClientRect();
        const offset = Math.max(0, 150 - rect.top);

        if (offset === 0) {
          card.style.position = "sticky";
          card.style.top = "150px";
        } else {
          card.style.position = "relative";
          card.style.top = "0px";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollAnimation>
      <div
        id="service"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center my-20 gap-10">
          <Title
            h1="Nos Services Technologiques et Solutions Informatiques."
            h2="TECH SOLUTION S.A propose une large gamme de services IT et solutions digitales professionnelles adaptés aux entreprises et particuliers."
          />
          <div className="flex flex-col md:flex-row  px-10 xl:px-0 w-full xl:w-4/5 2xl:w-3/5 gap-5 justify-between md:items-center">
            <div>
              <Counter target={7} text={"+Years"} />
              <p className="text-sm sm:text-md lg:text-xl">Notre Experience </p>
            </div>
            <div>
              <Counter target={1200} text={"+"} />
              <p className="text-sm sm:text-md lg:text-xl">Clients fideles</p>
            </div>
            <div>
              <Counter target={4} text={"weeks"} />
              <p className="text-sm sm:text-md lg:text-xl">Disponibités</p>
            </div>
          </div>
        </div>
        <div className="w-full px-5 sm:px-10 md:w-4/5 lg:w-2/3  flex flex-col  gap-20">
          {service.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="w-full h-120 flex flex-col md:flex-row bg-white justify-center items-center gap-10 shadow-2xl shadow-gray-300 p-5 rounded-md "
              style={{ zIndex: service.length + item.id }}
            >
              <img
                className="w-full md:w-1/2 h-1/2 md:h-full object-cover rounded-md"
                src={item.imageUrl}
                alt=""
              />
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center md:gap-7 md:pl-10">
                <p className="font-semibold text-md md:text-xl xl:text-2xl 2xl:text-4xl">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm xl:text-[18px]">
                  {item.description}
                </p>
                <ul>
                  {item.content.map((content: string, index: number) => (
                    <p
                      key={index}
                      className="text-gray-800 font-semibold text-sm xl:text-[17px] list-disc list-inside"
                    >
                      <Check className="w-4 h-4 mr-2 inline text-green-600" />
                      {content}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <ScrollAnimation>
          <div className="flex flex-col justify-center items-center my-20 gap-10">
            <Title h1="Pourquoi choisir TECH SOLUTION S.A" h2="" />
            <div className="flex flex-col md:flex-row gap-10 w-4/5 justify-between">
              {partern.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center bg-gray-100 gap-10 w-full md:w-1/3 rounded-sm p-5"
                >
                  <div className="w-20 h-20 rounded-md flex justify-center items-center bg-white">
                    {item.imageUrl()}
                  </div>
                  <p className="font-semibold text-2xl">{item.title}</p>
                  <p className="text-gray-500 ">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="my-10 border-2 rounded-2xl w-4/5 flex  items-center p-10 gap-10 flex-col md:flex-row ">
              <svg
                id="brxe-rodjca"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#202020"
              >
                <path d="M10.025 34q-1.151 0-1.921-.77-.771-.772-.771-1.923V26.5q0-.355.238-.595a.8.8 0 0 1 .595-.238q.355 0 .595.238.238.24.238.595v4.807q0 .385.32.706.322.32.706.32h4.808q.356 0 .594.24.24.237.239.594 0 .356-.239.594a.8.8 0 0 1-.594.239zm21.282 0h-4.808a.8.8 0 0 1-.594-.239.8.8 0 0 1-.239-.594q0-.357.239-.595a.8.8 0 0 1 .594-.239h4.808q.385 0 .705-.32t.32-.706V26.5q0-.355.24-.595a.8.8 0 0 1 .594-.238q.355 0 .595.238.238.24.238.595v4.807q0 1.151-.77 1.922-.771.771-1.922.771M7.333 10.026q0-1.15.77-1.922.771-.77 1.922-.77h4.808q.356 0 .594.238.24.239.239.595 0 .356-.239.594a.8.8 0 0 1-.594.239h-4.808q-.385 0-.705.32-.32.322-.32.706v4.807q0 .357-.24.595a.8.8 0 0 1-.594.239.8.8 0 0 1-.595-.24.8.8 0 0 1-.238-.594zm26.666 0v4.807q0 .357-.238.595a.8.8 0 0 1-.595.239.8.8 0 0 1-.595-.24.8.8 0 0 1-.238-.594v-4.807q0-.385-.32-.706-.321-.32-.706-.32h-4.808a.8.8 0 0 1-.594-.239.8.8 0 0 1-.239-.594q0-.357.239-.595a.8.8 0 0 1 .594-.239h4.808q1.151 0 1.921.771.771.771.771 1.922M20.73 29.352q.555 0 .934-.38a1.27 1.27 0 0 0 .38-.934q0-.554-.38-.934a1.27 1.27 0 0 0-.934-.38q-.554 0-.934.38a1.27 1.27 0 0 0-.38.934q0 .555.38.935t.934.38m0-15.82q1.276 0 2.2.81.925.812.925 2.046 0 .894-.524 1.628-.525.735-1.2 1.327-1.084.99-1.614 1.844a4.14 4.14 0 0 0-.614 1.87.63.63 0 0 0 .193.557q.233.228.57.229a.8.8 0 0 0 .566-.224.94.94 0 0 0 .29-.562q.115-.708.5-1.265.384-.558 1.208-1.382 1.266-1.266 1.745-2.13t.48-1.92q0-1.93-1.305-3.155t-3.356-1.224q-1.419 0-2.598.642-1.178.643-1.886 1.867a.67.67 0 0 0-.036.588q.116.313.434.425.285.112.607.016t.527-.362a5 5 0 0 1 1.271-1.168 2.94 2.94 0 0 1 1.617-.457"></path>
              </svg>
              <div className="flex flex-col gap-4 ">
                <p className="font-semibold text-2xl mb-2">
                  Ecrivez nous et trouvons la solution a votre probleme ?
                </p>
                <p className="text-gray-500  ">
                  contactez votre equipe d'experts et nous vous aiderons a avoir
                  cette solution qui vous manque .
                </p>
              </div>
              <div>
                <button
                  className="text-center rounded-full bg-black w-50 text-white  gap-2 px-4 py-4 flex justify-center items-center"
                  onClick={() => {
                    handleScroll(4);
                  }}
                >
                  Contactez nous <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex flex-col justify-center items-center gap-10 w-full lg:w-4/5 py-20">
            <Title
              h1="choisissez parmie notre catetalogue votre solution"
              h2="identifier votre probleme et votre offrirons la solution atravres notre équipe d'experts"
            />
            <div className="flex flex-col md:flex-row gap-5">
              <Stick
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    fill="#202020"
                  >
                    <path d="M9.25 8.25v2.25q0 .32.216.534a.73.73 0 0 0 .534.216.73.73 0 0 0 .534-.216.73.73 0 0 0 .216-.534V8.25H13a.73.73 0 0 0 .534-.216.73.73 0 0 0 .216-.534.73.73 0 0 0-.216-.535A.73.73 0 0 0 13 6.75h-2.25V4.5a.73.73 0 0 0-.216-.534A.73.73 0 0 0 10 3.75a.73.73 0 0 0-.534.216.73.73 0 0 0-.216.534v2.25H7a.73.73 0 0 0-.535.215.73.73 0 0 0-.215.535q0 .32.215.534A.73.73 0 0 0 7 8.25zM2.308 15q-.758 0-1.283-.525A1.75 1.75 0 0 1 .5 13.192V1.808q0-.758.525-1.283T2.308 0h15.384q.758 0 1.283.525t.525 1.283v11.384q0 .758-.525 1.283T17.692 15H13.5v1.096a.88.88 0 0 1-.259.645.88.88 0 0 1-.645.259H7.404a.88.88 0 0 1-.645-.259.88.88 0 0 1-.259-.645V15zm0-1.5h15.384a.3.3 0 0 0 .212-.096.3.3 0 0 0 .096-.212V1.808a.3.3 0 0 0-.096-.212.3.3 0 0 0-.212-.096H2.308a.3.3 0 0 0-.212.096.3.3 0 0 0-.096.212v11.384q0 .116.096.212a.3.3 0 0 0 .212.096"></path>
                  </svg>
                }
                content="We Create For The Pros"
              />
              <Stick
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    fill="#202020"
                  >
                    <path d="M9 17a8.2 8.2 0 0 1-3.298-.67 8.6 8.6 0 0 1-2.706-1.826 8.6 8.6 0 0 1-1.827-2.706A8.2 8.2 0 0 1 .5 8.5q0-1.825.688-3.395a8.3 8.3 0 0 1 1.896-2.717.87.87 0 0 1 .642-.25q.375.009.63.264L9.68 7.727q.208.208.212.522a.7.7 0 0 1-.212.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217L3.754 3.908a7.8 7.8 0 0 0-1.262 2.031Q2 7.082 2 8.5q0 2.9 2.05 4.95T9 15.5t4.95-2.05T16 8.5q0-2.646-1.736-4.632-1.737-1.985-4.514-2.306V2.75q0 .318-.216.535A.73.73 0 0 1 9 3.5a.73.73 0 0 1-.534-.216.73.73 0 0 1-.216-.534v-2q0-.319.216-.534A.73.73 0 0 1 9 0q1.749 0 3.298.67a8.6 8.6 0 0 1 2.706 1.826 8.6 8.6 0 0 1 1.827 2.706A8.2 8.2 0 0 1 17.5 8.5a8.2 8.2 0 0 1-.67 3.298 8.6 8.6 0 0 1-1.826 2.706 8.6 8.6 0 0 1-2.706 1.827A8.2 8.2 0 0 1 9 17M4 9.384a.85.85 0 0 1-.63-.254.86.86 0 0 1-.255-.63q0-.378.255-.63.255-.255.63-.255.378 0 .63.255.255.255.255.63 0 .378-.255.63a.86.86 0 0 1-.63.254m5 5a.85.85 0 0 1-.63-.254.86.86 0 0 1-.254-.63q0-.378.254-.63.255-.255.63-.254.378 0 .63.254.255.255.254.63 0 .378-.254.63a.86.86 0 0 1-.63.254m5-5a.85.85 0 0 1-.63-.254.86.86 0 0 1-.254-.63q0-.378.254-.63.255-.255.63-.255.378 0 .63.255.255.255.254.63 0 .378-.254.63a.86.86 0 0 1-.63.254"></path>
                  </svg>
                }
                content="We Create For The Pros"
              />
              <Stick
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    fill="#202020"
                  >
                    <path d="M9.342 6.616h8.116a7.9 7.9 0 0 0-2.077-3.04A7.6 7.6 0 0 0 12.15 1.8zm-2.184 2L11.235 1.6a6 6 0 0 0-.618-.075A9 9 0 0 0 10 1.5a7.6 7.6 0 0 0-3.075.625A8.7 8.7 0 0 0 4.4 3.8zM2.25 11.5h5.566L3.777 4.504a8.4 8.4 0 0 0-1.308 2.31A7.6 7.6 0 0 0 2 9.5a8 8 0 0 0 .25 2m5.62 5.7 2.776-4.815H2.542a7.86 7.86 0 0 0 2.087 3.039 7.65 7.65 0 0 0 3.24 1.776m2.13.3a7.6 7.6 0 0 0 3.075-.625A8.7 8.7 0 0 0 15.6 15.2l-2.758-4.815-4.058 6.996q.275.06.596.09t.62.029m6.223-3.004a8.8 8.8 0 0 0 1.289-2.31A7.5 7.5 0 0 0 18 9.5a8 8 0 0 0-.25-2h-5.565zM10 19a9.2 9.2 0 0 1-3.687-.749 9.6 9.6 0 0 1-3.024-2.04 9.6 9.6 0 0 1-2.04-3.023A9.2 9.2 0 0 1 .5 9.5q0-1.97.749-3.695a9.7 9.7 0 0 1 2.04-3.016A9.6 9.6 0 0 1 6.313.749 9.2 9.2 0 0 1 10 0q1.97 0 3.695.749 1.725.75 3.017 2.04 1.29 1.29 2.039 3.016T19.5 9.5q0 1.954-.749 3.688a9.6 9.6 0 0 1-2.04 3.024 9.7 9.7 0 0 1-3.016 2.039Q11.97 19.001 10 19"></path>
                  </svg>
                }
                content="We Create For The Pros"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 w-full px-5 md:px-10 xl:px-20">
              {galleries.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col w-full justify-center  gap-5"
                >
                  <div className="w-full h-100 flex justify-center object-cover bg-gray-100 relative z-10 rounded-md overflow-hidden">
                    <img
                      className="w-3/4 h-full object-cover top-10 relative rounded-2xl hover:-translate-y-5 duration-100 transition-all"
                      src={item.imageUrl}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-xl">{item.title}</p>
                  <p className="text-gray-500 ">{item.description}</p>
                  <div className="flex w-full gap-8">
                    <Link
                      to="/getStarted"
                      className="text-center rounded-full bg-black w-50 text-white  gap-2 px-4 py-4 flex justify-center items-center shadow-xl shadow-black"
                    >
                      Commencer
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
}

export default Services;
