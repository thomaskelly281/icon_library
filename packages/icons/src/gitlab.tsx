import { mdiGitlab } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gitlab(props: IconComponentProps) {
  return <Icon path={mdiGitlab} {...props} />;
}

export { mdiGitlab as path };
