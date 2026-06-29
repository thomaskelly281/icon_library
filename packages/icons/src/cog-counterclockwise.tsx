import { mdiCogCounterclockwise } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogCounterclockwise(props: IconComponentProps) {
  return <Icon path={mdiCogCounterclockwise} {...props} />;
}

export { mdiCogCounterclockwise as path };
