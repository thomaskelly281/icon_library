import { mdiEslint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Eslint(props: IconComponentProps) {
  return <Icon path={mdiEslint} {...props} />;
}

export { mdiEslint as path };
