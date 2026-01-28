import styles from "./contenu.module.css";

export default function Contenu({ texte }: { texte: string }) {
  return (
    <div>
      <p className={styles.main}>{texte}</p>
    </div>
  );
}
