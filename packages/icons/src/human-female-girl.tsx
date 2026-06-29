import { mdiHumanFemaleGirl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanFemaleGirl(props: IconComponentProps) {
  return <Icon path={mdiHumanFemaleGirl} {...props} />;
}

export { mdiHumanFemaleGirl as path };
