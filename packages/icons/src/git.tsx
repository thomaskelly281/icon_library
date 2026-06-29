import { mdiGit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Git(props: IconComponentProps) {
  return <Icon path={mdiGit} {...props} />;
}

export { mdiGit as path };
