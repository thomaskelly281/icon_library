import { mdiHumanFemale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanFemale(props: IconComponentProps) {
  return <Icon path={mdiHumanFemale} {...props} />;
}

export { mdiHumanFemale as path };
