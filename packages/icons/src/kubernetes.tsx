import { mdiKubernetes } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kubernetes(props: IconComponentProps) {
  return <Icon path={mdiKubernetes} {...props} />;
}

export { mdiKubernetes as path };
