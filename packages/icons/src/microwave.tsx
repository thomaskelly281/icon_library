import { mdiMicrowave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Microwave(props: IconComponentProps) {
  return <Icon path={mdiMicrowave} {...props} />;
}

export { mdiMicrowave as path };
