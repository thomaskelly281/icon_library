import { mdiMicrosoft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Microsoft(props: IconComponentProps) {
  return <Icon path={mdiMicrosoft} {...props} />;
}

export { mdiMicrosoft as path };
