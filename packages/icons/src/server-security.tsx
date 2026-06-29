import { mdiServerSecurity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerSecurity(props: IconComponentProps) {
  return <Icon path={mdiServerSecurity} {...props} />;
}

export { mdiServerSecurity as path };
