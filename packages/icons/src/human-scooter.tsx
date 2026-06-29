import { mdiHumanScooter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanScooter(props: IconComponentProps) {
  return <Icon path={mdiHumanScooter} {...props} />;
}

export { mdiHumanScooter as path };
