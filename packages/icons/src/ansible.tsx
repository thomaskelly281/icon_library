import { mdiAnsible } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ansible(props: IconComponentProps) {
  return <Icon path={mdiAnsible} {...props} />;
}

export { mdiAnsible as path };
