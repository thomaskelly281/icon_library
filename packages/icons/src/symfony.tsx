import { mdiSymfony } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Symfony(props: IconComponentProps) {
  return <Icon path={mdiSymfony} {...props} />;
}

export { mdiSymfony as path };
