import { mdiJira } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Jira(props: IconComponentProps) {
  return <Icon path={mdiJira} {...props} />;
}

export { mdiJira as path };
