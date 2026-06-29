import { mdiHomeCity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeCity(props: IconComponentProps) {
  return <Icon path={mdiHomeCity} {...props} />;
}

export { mdiHomeCity as path };
