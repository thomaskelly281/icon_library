import { mdiKarate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Karate(props: IconComponentProps) {
  return <Icon path={mdiKarate} {...props} />;
}

export { mdiKarate as path };
