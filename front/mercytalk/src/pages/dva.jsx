import React from "react";
import CharacterPage from "../components/herocard";
import "./index.css";

const DvaPage = () => {
  return (
    <CharacterPage
      name="Dva"
      profileImage="/images/dva.png"
      description="D.Va was once a professional gamer who now uses her skills to pilot a state-of-the-art robotic armor and defend her homeland. Tanks absorb damage and attack fortified positions, such as enemy groups or chokepoints."
      abilities={[
        { name: "Fusion Cannons", videoUrl: "https://youtu.be/jF4HHqnNgAY?si=GFHmdir8PT5OaUH6" },
        { name: "Boosters", videoUrl: "https://youtu.be/tAyN2C_r1mI?si=QBhKGSGXj_dT7NSS" },
        { name: "Defense Matrix", videoUrl: "https://youtu.be/ZRBKIsTlTJw?si=TNgLnWg6EZrPrr8Q" },
        { name: "Micro Missiles", videoUrl: "https://youtu.be/_DaeZ9Q0Tcc?si=CUgYj2-t0Q_oBs1m" },
        { name: "Self-Destruct", videoUrl: "https://youtu.be/lkeeAn7uitE?si=ghlIJa3CTg4FVB4U" },
        { name: "Ejection", videoUrl: "https://www.youtube.com/watch?v=example3" },
        { name: "Lightgun", videoUrl: "https://youtu.be/4pAUI5g_W08?si=H6pEnRw9UZqpfeWn" },
        { name: "MECA", videoUrl: "https://youtu.be/ADjl9-8uCoQ?si=C7BENx5sjgqH2nwL" },
      ]}
      counters={[
        { name: "Pharah", image: "/images/pharah.png" },
        { name: "Reaper", image: "/images/reaper.png" },
        { name: "Roadhog", image: "/images/roadhog.png" },
      ]}
      combos={[
        { name: "Reinhardt", image: "/images/rein.png" },
        { name: "Hanzo", image: "/images/hanzo.png" },
        { name: "Lucio", image: "/images/lucio.png" },
      ]}
    />
  );
};

export default DvaPage;
