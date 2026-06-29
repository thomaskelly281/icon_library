import { mdiGeneratorStationary } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GeneratorStationary(props: IconComponentProps) {
  return <Icon path={mdiGeneratorStationary} {...props} />;
}

export { mdiGeneratorStationary as path };
