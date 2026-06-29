import { mdiTailwind } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tailwind(props: IconComponentProps) {
  return <Icon path={mdiTailwind} {...props} />;
}

export { mdiTailwind as path };
