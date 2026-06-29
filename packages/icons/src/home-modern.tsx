import { mdiHomeModern } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeModern(props: IconComponentProps) {
  return <Icon path={mdiHomeModern} {...props} />;
}

export { mdiHomeModern as path };
