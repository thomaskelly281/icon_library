import { mdiGithub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Github(props: IconComponentProps) {
  return <Icon path={mdiGithub} {...props} />;
}

export { mdiGithub as path };
