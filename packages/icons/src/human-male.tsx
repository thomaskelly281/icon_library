import { mdiHumanMale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMale(props: IconComponentProps) {
  return <Icon path={mdiHumanMale} {...props} />;
}

export { mdiHumanMale as path };
