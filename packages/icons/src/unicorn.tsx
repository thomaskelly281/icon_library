import { mdiUnicorn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Unicorn(props: IconComponentProps) {
  return <Icon path={mdiUnicorn} {...props} />;
}

export { mdiUnicorn as path };
