import { mdiHumanMaleBoard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleBoard(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleBoard} {...props} />;
}

export { mdiHumanMaleBoard as path };
