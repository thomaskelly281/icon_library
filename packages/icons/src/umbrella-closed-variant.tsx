import { mdiUmbrellaClosedVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UmbrellaClosedVariant(props: IconComponentProps) {
  return <Icon path={mdiUmbrellaClosedVariant} {...props} />;
}

export { mdiUmbrellaClosedVariant as path };
