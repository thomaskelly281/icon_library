import { mdiShuriken } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shuriken(props: IconComponentProps) {
  return <Icon path={mdiShuriken} {...props} />;
}

export { mdiShuriken as path };
