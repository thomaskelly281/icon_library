import { mdiOar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Oar(props: IconComponentProps) {
  return <Icon path={mdiOar} {...props} />;
}

export { mdiOar as path };
