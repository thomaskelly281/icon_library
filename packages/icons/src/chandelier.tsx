import { mdiChandelier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Chandelier(props: IconComponentProps) {
  return <Icon path={mdiChandelier} {...props} />;
}

export { mdiChandelier as path };
