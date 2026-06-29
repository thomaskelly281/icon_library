import { mdiHumanMaleGirl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleGirl(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleGirl} {...props} />;
}

export { mdiHumanMaleGirl as path };
