import { mdiLighthouse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lighthouse(props: IconComponentProps) {
  return <Icon path={mdiLighthouse} {...props} />;
}

export { mdiLighthouse as path };
