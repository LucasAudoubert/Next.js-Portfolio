import { getSkills } from "@/actions/GetSkills";
import { Skill } from "@/types/Skill";

export default async function Skills() {
  const response = await getSkills(); // Call API

  if (!response.ok || response.status >= 300) {
    return <p>Une erreur est survenue</p>;
  }

  const skills = await response.json();

  if (skills.length == 0) {
    return <p>Aucune compétence</p>;
  }

  // Show all skills
  return skills.map((skill: Skill, i: number) => {
    return (
      <p key={i}>
        {skill.skill_name} : {skill.level}/5
      </p>
    );
  });
}
