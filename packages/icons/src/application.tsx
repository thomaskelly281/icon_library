import { mdiApplication } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Application(props: IconComponentProps) {
  return <Icon path={mdiApplication} {...props} />;
}

export { mdiApplication as path };
