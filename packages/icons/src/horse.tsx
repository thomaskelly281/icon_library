import { mdiHorse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Horse(props: IconComponentProps) {
  return <Icon path={mdiHorse} {...props} />;
}

export { mdiHorse as path };
