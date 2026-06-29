import { mdiHomeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeVariant(props: IconComponentProps) {
  return <Icon path={mdiHomeVariant} {...props} />;
}

export { mdiHomeVariant as path };
