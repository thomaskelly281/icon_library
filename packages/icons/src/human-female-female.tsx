import { mdiHumanFemaleFemale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanFemaleFemale(props: IconComponentProps) {
  return <Icon path={mdiHumanFemaleFemale} {...props} />;
}

export { mdiHumanFemaleFemale as path };
