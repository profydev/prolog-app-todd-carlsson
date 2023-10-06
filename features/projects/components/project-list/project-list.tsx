import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import Image from "next/image";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div data-test="image-loader" className={styles.loaderContainer}>
        <Image
          height={66}
          width={66}
          className={styles.loader}
          src="/icons/loader.svg"
          alt="loader"
        />
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorLeft}>
          <Image
            height={20}
            width={20}
            src="/icons/alert-circle.svg"
            alt="alert icon"
          />
          <p>There was a problem while loading the project data</p>
        </div>
        <button className={styles.errorButton}>
          Try Again
          <Image
            height={20}
            width={20}
            src="/icons/arrow-right.svg"
            alt="arrow button"
          />
        </button>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
